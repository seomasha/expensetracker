import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native"

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { Ionicons } from "@expo/vector-icons"
import ExpensesContextProvider from './store/expenses-context'
import IconButton from './components/ui/IconButton';
import { GlobalStyles } from './constants/styles';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ExpensesOverview() {
  return (
  <BottomTabs.Navigator screenOptions={({navigation}) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({tintColor}) => {
      return <IconButton icon="add" size={24} color={tintColor} onPress={() => {
        navigation.navigate('Manage Expense')
      }}/>
    }
  })}>
    <BottomTabs.Screen 
    name='Recent expenses' 
    component={RecentExpenses} options={{
      tabBarLabel: "Recent",
      tabBarIcon: ({color, size}) => <Ionicons name='hourglass' size={size} color={color}/>
    }}/>
    <BottomTabs.Screen name='All expenses' component={AllExpenses} options={{
      tabBarLabel: "All",
      tabBarIcon: ({color, size}) => <Ionicons name='calendar' size={size} color={color}/>
    }}/>
  </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: "white"
          }}>
            <Stack.Screen 
              name='Expenses overview' 
              component={ExpensesOverview}  
              options={{headerShown: false}}
            />
            <Stack.Screen name='Manage Expense' component={ManageExpense} options={{
              presentation: 'modal'
            }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}