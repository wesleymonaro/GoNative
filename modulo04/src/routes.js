import { StackNavigator } from 'react-navigation';
import { colors } from 'styles';

const Routes = StackNavigator({

}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.primaryDark,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default Routes;
