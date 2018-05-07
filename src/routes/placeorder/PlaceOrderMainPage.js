/**
 * Created by CLL on 18/4/27.
 */
import Navigation from '../../components/Navigation';
import ConfirmOrderInfo from '../placeorder/ConfirmOrderInfo'
import ChoosePayWay from '../placeorder/ChoosePayWay'
import OrderSuccess from '../placeorder/OrderSuccess'

import React from 'react';
import {connect} from 'dva';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Stepper, { Step, StepButton } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = ({
  root: {
    width: '80%',
    marginTop:'3%',
    marginLeft:'10%',
  },
  last:{
    alignSelf:'flex-end',
    marginRight:'30%'
  },
  button: {
    align:'flex-end',
    marginRight: '3%',
  },
  backButton: {
    align:'flex-end',
  },
  completed: {
    align:'flex-end',
    display: 'inline-block',
  },
  instructions: {
    marginLeft:'20%'
  },
});


function getSteps() {
  return ['Confirm Order Info', 'Choose Pay Way', 'Pay Success'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <ConfirmOrderInfo/>
      );
    case 1:
      return(
        <ChoosePayWay/>
      );
    case 2:
      return (
        <OrderSuccess/>
      );
    default:
      return 'Unknown step';
  }
}


class PlaceOrderMainPage extends React.Component {
  state = {
    activeStep: 0,
    completed: new Set(),
    skipped: new Set(),
  };

  totalSteps = () => {
    return getSteps().length;
  };

  isStepComplete(step) {
    return this.state.completed.has(step);
  }

  completedSteps() {
    return this.state.completed.size;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps() - this.skippedSteps();
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  isStepOptional = step => {
    return false;
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }
    const skipped = new Set(this.state.skipped);
    skipped.add(activeStep);
    this.setState({
      activeStep: this.state.activeStep + 1,
      skipped,
    });
  };

  skippedSteps() {
    return this.state.skipped.size;
  }

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !this.state.completed.has(i));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  handleComplete = () => {
    const completed = new Set(this.state.completed);
    completed.add(this.state.activeStep);
    this.setState({
      completed,
    });
    /**
     * Sigh... it would be much nicer to replace the following if conditional with
     * `if (!this.allStepsComplete())` however state is not set when we do this,
     * thus we have to resort to not being very DRY.
     */
    if (completed.size !== this.totalSteps() - this.skippedSteps()) {
      this.handleNext();
    }
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      completed: new Set(),
      skipped: new Set(),
    });
  };

  render() {

    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div>
        <Navigation/>

        <div className={classes.root}>
          <Stepper alternativeLabel nonLinear activeStep={activeStep}>
            {steps.map((label, index) => {
              const props = {};
              const buttonProps = {};
              if (this.isStepOptional(index)) {
                buttonProps.optional = <Typography variant="caption"></Typography>;
              }
              if (this.isStepSkipped(index)) {
                props.completed = false;
              }
              return (
                <Step key={label} {...props}>
                  <StepButton
                    onClick={this.handleStep(index)}
                    completed={this.isStepComplete(index)}
                    {...buttonProps}
                  >
                    {label}
                  </StepButton>
                </Step>
              );
            })}
          </Stepper>

          <div>
            {this.allStepsCompleted() ? (
              <div>

              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}

                </Typography>
                <div style={{width: '100%', marginTop: '5%', marginLeft:'65%'}}>
                  <Button
                    disabled={activeStep === 0||activeStep===2}
                    display={activeStep==2?'none':'block'}
                    onClick={this.handleBack}
                    className={classes.button}
                  >
                    Pre
                  </Button>
                  <Button variant="raised" color="primary" onClick={this.handleComplete}>
                    {this.completedSteps() === this.totalSteps() - 1 ? 'Finish' : 'Continue'}
                  </Button>


                </div>
              </div>
            )}
          </div>
        </div>

      </div>


    )
  }
}

PlaceOrderMainPage.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(PlaceOrderMainPage);
