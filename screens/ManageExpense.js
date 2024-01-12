import { useContext, useLayoutEffect } from "react";
import { Text, StyleSheet, View } from "react-native";
import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/ui/Button";
import { ExpensesContext } from "../store/expenses-context";

function ManageExpense({route, navigation}) {

    const expensesCtx = useContext(ExpensesContext);

    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense',
        });
    }, [navigation, isEditing]);

    function deleteExpenseHandler() {
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler() {
        if(isEditing) {
            expensesCtx.updateExpense(editedExpenseId, {description: "New test", amount: 29.99, date: new Date('2024-01-9')});
        }
        else{
            expensesCtx.addExpense({description: "Test", amount: 19.99, date: new Date('2024-01-10')});
        }
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button mode='flat' onPress={cancelHandler} style={styles.button}>Cancel</Button>
                <Button onPress={confirmHandler} style={styles.button}>{isEditing ? 'Update' : 'Add'}</Button>
            </View>
            {isEditing && 
            <View style={styles.deleteContainer}>
                <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
            </View>
            }
        </View>
    )

}
export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },

    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})