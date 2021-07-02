import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import ActualProvider from './store/ActualProvider';
import BudgetProvider from './store/BudgetProvider';

import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import HomeCompiled from './components/Home/HomeCompiled';
import Investments from './components/Investments/Investments'
import Forest from './components/Forest/Forest';
import ChartsCompiled from './components/Charts/ChartsCompiled';
import NewsCompiled from './components/News/NewsCompiled';
import Messenger from './components/Messenger/Messenger';
import ExpenseMain from './components/Expense/ExpenseMain';
import IncomeMain from './components/Income/IncomeMain';
import BudgetMain from './components/Budget/BudgetMain';
import Sidebar from './components/Sidebar/Sidebar';

const App =() => {

  return (
      <ActualProvider>
        <BudgetProvider>
          <Router>
              <Header/>
              <Navigation />
              <Switch>
                <Route path='/' exact component={HomeCompiled} />
                <Route path='/Expense' component={ExpenseMain}/>
                <Route path='/Income' component={IncomeMain}/>
                <Route path='/Budget' component={BudgetMain}/>
                <Route path='/Investments' component={Investments} />
                <Route path='/Forest' component={Forest} />
                <Route path='/chartsCompiled' component={ChartsCompiled} />
                <Route path='/NewsCompiled' component={NewsCompiled} />
                <Route path='/Messenger' component={Messenger} />
              </Switch>
          </Router>
          <Sidebar />
        </BudgetProvider>
      </ActualProvider>
  );
}

export default App;
