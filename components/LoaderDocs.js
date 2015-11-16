const React = require('react');

const { Loader } = require('mx-react-components');

const Markdown = require('components/Markdown');

const LoaderDocs = React.createClass({
  render () {
    return (
      <div>
        <h1>
          Loader
          <label>A loading scrim that can be placed over the entire page or relative to a element.</label>
        </h1>

        <h3>Demo</h3>
        <div className='flex'>
          <div style={style}>
            <Loader isLoading={true} isRelative={true} />
          </div>
          <div style={style}>
            <Loader isLoading={true} isRelative={true} isSmall={true} />
          </div>
          <div style={style}>
            <Loader color='red' isLoading={true} isRelative={true} />
          </div>
        </div>

        <h3>Usage</h3>
        <h5>color <label>String</label></h5>
        <p>A css hex value or color keyword that sets the color of the loading circle.</p>

        <h5>isLoading <label>Boolean</label></h5>
        <p>If this is set to 'true', then the loader element will be displayed. If it's set to 'false', then an empty 'div' will be rendered.</p>

        <h5>isRelative <label>Boolean</label></h5>
        <p>If this is set to 'true', then the loader will be bound by the closest parent component with a 'position: relative'.</p>

        <h5>isSmall <label>Boolean</label></h5>
        <p>If this is set to 'true', then the word "Loading" will not be displayed and the loading cirle's size will be reduced to 30x30 pixels.</p>

        <h3>Example</h3>
        <Markdown>
  {`
    <Loader
      isLoading={true}
      isRelative={true}
      isSmall={true}
    />
  `}
        </Markdown>
      </div>
    );
  }
});

const style = {
  backgroundImage: 'url("../images/sample-image.jpg")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  width: '33.3%',
  paddingTop: '20%',
  margin: '20px',
  position: 'relative'
};

module.exports = LoaderDocs;