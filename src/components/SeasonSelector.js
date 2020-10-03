import React from 'react';
import injectSheet from 'react-jss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const seasons = [];
for (let i = 1; i <= 9; i += 1) {
  seasons.push({
    file: i,
    name: `${i}`,
  });
}

const styles = {
  wrapper: {
    maxWidth: '25%',
    textAlign: 'center',
    marginLeft: '2rem'
  },
  season: {
    color: 'yellow',
    fontSize: '4em',
    fontFamily: '\'Allerta Stencil\', sans-serif',
    margin: '2rem'
  },
  sideBar: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gridTemplateRows: 'repeat(3,1fr)',
    minWidth: '300px',
    overflowY: 'auto',
  },
  seasonButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    margin: '12px',
    padding: '1rem',
    color: 'yellow',
    outline: '2px solid red',
    textAlign: 'center',
    cursor: 'pointer',
    fontFamily: '\'Allerta Stencil\', sans-serif',
    textTransform: 'uppercase',
    '&:hover': {
      background: 'yellow',
      color: 'black',
    },
  },
  selected: {
    background: 'yellow',
    color: 'black',
  },
};

const SeasonSelector = ({ classes, history, match }) => {
  const { season } = match.params;
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.season}>Seasons</h3>
      <div className={classes.sideBar}>
        {
          seasons.map(({ file, name }, i) => (
            <div
              key={i}
              className={`${classes.seasonButton} ${season === file ? classes.selected : ''}`}
              onClick={() => history.push(`/seasons/${file}`)}
            >
              {name}
            </div>
          ))
        }
      </div>
    </div>
  );
};

SeasonSelector.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withRouter(injectSheet(styles)(SeasonSelector));