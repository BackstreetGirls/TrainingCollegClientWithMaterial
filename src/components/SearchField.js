/**
 * Created by hyx on 2018/5/5.
 */
import React from 'react';
import {message} from 'antd';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from 'material-ui/Grid';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import {suggestions} from "../utils/SearchFieldSuggestion";


function renderInput(inputProps) {
  const { classes, ref, ...other } = inputProps;

  return (
    <TextField
      fullWidth
      id="searchField"
      InputProps={{
        inputRef: ref,
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontSize: 14, fontWeight: 500, color: 'rgba(24,120,255)' }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontSize: 14, fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
      const keep =
        count < 5 && suggestion.label.toLowerCase().indexOf(inputValue)>=0;

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
  suggestionsContainerOpen: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
});

class SearchField extends React.Component {

  state = {
    value: '',
    suggestions: [],
    visibility: true,
    windowWidth: window.innerWidth
  };

  // 实现屏幕放大，抽屉自动合上
  handleResize() {
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

  handleSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  handleSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  };

  handleChange = (event, { newValue }) => {
    this.setState({
      value: newValue,
    });
  };

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
                <Autosuggest
                  theme={{
                    container: classes.container,
                    suggestionsContainerOpen: classes.suggestionsContainerOpen,
                    suggestionsList: classes.suggestionsList,
                    suggestion: classes.suggestion,
                  }}
                  renderInputComponent={renderInput}
                  suggestions={this.state.suggestions}
                  onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                  onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                  renderSuggestionsContainer={renderSuggestionsContainer}
                  getSuggestionValue={getSuggestionValue}
                  renderSuggestion={renderSuggestion}
                  inputProps={{
                    classes,
                    placeholder: 'Search courses',
                    value: this.state.value,
                    onChange: this.handleChange,
                  }}
                />
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
