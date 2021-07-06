import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import ExpenseFilter from './components/ExpenseFilter';


// //filter by year
// test('display filter by year', () => {
//   render(<ExpenseFilter value={'2022'}/>);
//   const filter = screen.getByRole('select');
//   expect(filter).toHaveTextContent('2022');
// });


// // //check effect of display expense button
// // test('effect of clicking expense button', () => {
// //   render(<App />);
// //   const addExpenseBtn = screen.getByText(/Add New Expense/i);
// //   userEvent.click(addExpenseBtn)
// //   const cancelBtn = screen.getByText(/Cancel/)
// //   expect(cancelBtn).toHaveTextContent(/Cancel/i);
// // });


// // test('display chart', () => {
// //   render(<App />);
// //   const chart = screen.getByText(/Sept/i);
// //   expect(chart).toBeInTheDocument();
// // });


// // test('display form amount', () => {
// //   render(<App />);
// //   const addExpenseBtn = screen.getByText(/Add New Expense/i);
// //   userEvent.click(addExpenseBtn)
// //   const amount = screen.getByText(/Amount/i);
// //   expect(amount).toBeInTheDocument();
// // });