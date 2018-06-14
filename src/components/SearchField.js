/**
 * Created by hyx on 2018/5/5.
 */
import React from 'react';
import {message} from 'antd';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {MenuItem} from 'material-ui/Menu';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import Search from '@material-ui/icons/Search';
import {suggestions} from "../utils/SearchFieldSuggestion";


function renderInput(inputProps) {
  const {InputProps, classes, ref, ...other} = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

function renderSuggestion({suggestion, index, itemProps, highlightedIndex, selectedItem}) {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({label: PropTypes.string}).isRequired,
};

function getSuggestions(inputValue) {
  let count = 0;

  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;

    if (keep) {
      count += 1;
    }

    return keep;
  });
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginRight: theme.spacing.unit * 2,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  inputRoot: {
    flexWrap: 'wrap',
  },
  iconButton: {
    padding: 0,
  }
});


class SearchField extends React.Component {

  state = {
    visibility: true,
    windowWidth: window.innerWidth
  };

  // 实现屏幕放大，抽屉自动合上
  handleResize(e) {
    this.setState({
      windowWidth: window.innerWidth
    });
    if (this.state.windowWidth < 1200) {
      this.setState({
        visibility: false,
      });
    }
    else {
      this.setState({
        visibility: true,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', ::this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', ::this.handleResize)
  }

  // 搜索方法
  handleSearch = () => {
    let search_content = document.getElementById("searchField").value;
    if (search_content === "") {
      message.warning("Please type in the search content!");
    }
    else {
      window.location.hash = "/searchresult";
      window.location.reload(true);
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        {
          this.state.visibility ?
            <Grid container spacing={0} alignItems="flex-end">
              <Grid item sm={9} xs={8}>
                <Downshift style={{marginButton: 10}}>
                  {({getInputProps, getItemProps, isOpen, inputValue, selectedItem, highlightedIndex}) => (
                    <div className={classes.container}>
                      {renderInput({
                        fullWidth: true,
                        classes,
                        InputProps: getInputProps({
                          placeholder: 'Search courses',
                          id: 'searchField',
                        }),
                      })}
                      {isOpen ? (
                        <Paper className={classes.paper} square>
                          {getSuggestions(inputValue).map((suggestion, index) =>
                            renderSuggestion({
                              suggestion,
                              index,
                              itemProps: getItemProps({item: suggestion.label}),
                              highlightedIndex,
                              selectedItem,
                            }),
                          )}
                        </Paper>
                      ) : null}
                    </div>
                  )}
                </Downshift>
              </Grid>
              <Grid item sm={3} xs={4}>
                <IconButton onClick={this.handleSearch}><Search/></IconButton>
              </Grid>
            </Grid>
            :
            null
        }
      </div>
    );
  }
}

SearchField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchField);
