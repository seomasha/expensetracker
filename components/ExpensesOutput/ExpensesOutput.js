import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2023-12-19')
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.99,
        date: new Date('2024-01-22')
    },
    {
        id: 'e3',
        description: 'Bananas',
        amount: 5.99,
        date: new Date('2024-01-08')
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-12-19')
    },
    {
        id: 'e5',
        description: 'A laptop',
        amount: 599.99,
        date: new Date('2023-12-19')
    },
]

function ExpensesOutput({expenses, expensesPeriod}) { 
    return(
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} period={expensesPeriod} />
            <ExpensesList expenses={DUMMY_EXPENSES}/>
        </View>
    )
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700
    }
})