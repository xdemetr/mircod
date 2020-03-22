import React from 'react';
import styles from './Constructor.module.sass';
import descStyles from './Description.module.sass';
import productStyles from './Product.module.sass';

import cn from 'classnames';
import Button from '../Button/Button';
import ConstructorAside from './ConstructorAside';

import productImg from './product.png';
import { connect } from 'react-redux';
import RangeSlider from '../RangeSlider';
import { selectConnection, selectDistance } from '../store/actions/optionsActions';
import ConnectionList from '../ConnectionList';


const Constructor = ({ selected, connections, distance, selectDistance, selectConnection }) => {

  const handleSliderChange = value => {
    selectDistance(value);
  };

  const handleConnectionChange = value => {
    selectConnection(value);
  };

  const DescriptionImage = () => {

    if (selected.length < 4) {
      return null;
    }

    return (
      <div className={descStyles.descriptionImageBox}>
        <img src={productImg} alt="product" className={descStyles.descriptionImage}/>
      </div>
    );
  };

  return (
    <div className={styles.constructor}>

      <ConstructorAside selected={selected}/>

      <div className={cn(styles.constructorDescription)}>
        <div className={descStyles.description}>
          <div className={descStyles.descriptionHeader}>
            <h2 className={descStyles.descriptionTitle}>White label<br/>W-394900 XP</h2>
            {selected.length >= 4 && <Button mod="outlineLight">Order now</Button>}
          </div>

          <div className={descStyles.descriptionBody}>
            <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <p>Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet
              nisi.
              Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa
              nisl quis neque. Suspendisse in orci enim.</p>
          </div>

          <DescriptionImage/>
        </div>
      </div>

      <div className={styles.constructorBody}>

        <div className={productStyles.product}>
          <div className={productStyles.header}>
            <h2 className={productStyles.title}>Transmission <span>Distance</span></h2>
          </div>

          <div className={productStyles.slider}>
            <div className={productStyles.sliderHeader}>
              <h3 className={productStyles.sliderTitle}>Choose <span>distance</span></h3>
              <div className={productStyles.current}>
                <span className={productStyles.currentLabel}>Current<br/>distance</span>
                <span className={productStyles.currentValue}>
                  {distance}<span>m</span>
                </span>
              </div>
            </div>

            <RangeSlider min={0} max={50} value={distance} onChange={handleSliderChange}/>
          </div>

          <div className={productStyles.connection}>
            <div className={productStyles.connectionHeader}>
              <h3 className={productStyles.connectionTitle}>Choose <span>type of connection</span></h3>
            </div>

            <ConnectionList items={connections} onClick={handleConnectionChange}/>
          </div>
        </div>

      </div>

    </div>
  );
};

const mapStateToProps = state => ({
  selected: state.options.selected,
  distance: state.options.distance,
  connections: state.options.connections
});

export default connect(mapStateToProps, { selectDistance, selectConnection })(React.memo(Constructor));
