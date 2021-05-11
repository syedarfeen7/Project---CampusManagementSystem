import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


import CompanyProfile from './Component/Company/Home/profile'
import CompanyJobForm from './Component/Company/Home/jobForm'
import Home from './Component/HomeComponent/home'
import Login from './Component/LoginComponent/login'
import SignUp from './Component/SingnUpComponent/signUp'
import PostedJobs from './Component/Company/postedJobs/alljobs'
import Studenthome from './Component/Student/Home/home'
import Companies from './Component/Student/Companies/companies'
import PortfolioForm from './Component/Student/Form/portfolioForm'
import AdminHome from './Component/Admin/Home/home'
import Students from './Component/Admin/Students/students'
import CompaniesForAdmin from './Component/Admin/Companies/companies'
import AdminAllJobs from './Component/Admin/Companies/adminAllJobs'
import CompleteAllJobs from './Component/Student/AllJobs/CompleteAllJobs'
import StudProfile from './Component/Admin/Students/studProfile'
import { useEffect } from 'react'
import AppliedJobsStudent from './Component/Student/AppliedJobs/appliedJobs'
import AppliedStudentsForCompany from './Component/Company/Students/students'
function App() {
  return <>

    <BrowserRouter>

      <Switch>

        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/SignUp'>
          <SignUp />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

        <Route path="/Admin/Home" exact>
          <AdminHome />
        </Route>
        <Route path="/Admin/Companies">
          <CompaniesForAdmin />
        </Route>
        <Route path="/Admin/Students">
          <Students />
        </Route>
        <Route path="/Admin/AllJobs/:id">
          <AdminAllJobs />
        </Route>
        <Route path="/Admin/StudProfile/:id?">
          <StudProfile />
        </Route>

        {/* COMPANY ROUTES */}

        <Route path="/Company/add-new" exact>
          <CompanyProfile />
        </Route>
        <Route path="/Company/jobForm/:id?">
          <CompanyJobForm />
        </Route>
        <Route path="/Company/alljobs">
          <PostedJobs />
        </Route>
        <Route path="/Company/Students/:id">
          <AppliedStudentsForCompany />
        </Route>

        {/* STUDENT ROUTES  */}

        <Route path="/Student/Home" exact>
          <Studenthome />
        </Route>

        <Route path='/Student/Companies'>
          <Companies />
        </Route>

        <Route path="/Student/AllJobs/:id">
          <CompleteAllJobs />
        </Route>
        <Route path="/Student/Profile/:id?">
          <PortfolioForm />
        </Route>
        <Route path="/Student/AppliedJobs">
          <AppliedJobsStudent />
        </Route>

      </Switch>
    </BrowserRouter>

  </>
}

export default App;
