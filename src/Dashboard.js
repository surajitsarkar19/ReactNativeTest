import React from 'react';
import {StyleSheet, View, Text, StatusBar, Dimensions} from 'react-native';

import MapView, {Marker} from 'react-native-maps';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import withLoading from './hoc/withLoading';
import {connect} from 'react-redux';
import {getAllCatagories, getAllShops} from './redux/actions';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log('Dashboard constructor');
    setTimeout(() => {
      this.props.showLoader(true);
    }, 3000);
    setTimeout(() => {
      this.props.showLoader(false);
      this.fitMapToMarker();
    }, 6000);
  }
  componentDidMount() {
    this.props.getAllCatagories();
    this.props.getAllShops();
  }

  fitMapToMarker = () => {
    const {
      shops: {data},
    } = this.props;

    if (data && data.length > 0) {
      this.map.fitToSuppliedMarkers(data.map(shop => `shop${shop.id}`), true);
    }
  };

  onMapReady = () => {
    console.log('Map is ready');
  };

  getInitialRegion = () => {
    return {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  };

  renderShops = () => {
    let markers = [];
    if (this.props.shops.data && this.props.shops.data.length > 0) {
      this.props.shops.data.map(shop => {
        markers.push(
          <MapView.Marker
            key={shop.id}
            identifier={`shop${shop.id}`}
            coordinate={shop.coordinates}
            title={shop.name}
            description={shop.name}
          />,
        );
      });
    }
    return markers;
  };
  render() {
    console.log('rendering dashboard');
    //console.log('shops', this.props.shops);
    return (
      <View style={styles.container}>
        <MapView
          ref={ref => (this.map = ref)}
          zoomEnabled={true}
          zoomControlEnabled={true}
          showsUserLocation={true}
          followUserLocation={true}
          style={styles.map}
          onMapReady={this.onMapReady}
          region={this.getInitialRegion()}>
          {this.renderShops()}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const mapStateToProps = state => ({
  catagories: state.catagory,
  shops: state.shop,
});

const mapDispatchToProps = {
  getAllCatagories,
  getAllShops,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLoading(Dashboard, true));
