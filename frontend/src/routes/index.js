import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import StudentList from '~/pages/Student/List';
import StudentForm from '~/pages/Student/Form';
import StudentEdition from '~/pages/Student/Edition';
import EnrollmentList from '~/pages/Enrollment/List';
import EnrollmentForm from '~/pages/Enrollment/Form';
import EnrollmentEdition from '~/pages/Enrollment/Edition';
import PlansList from '~/pages/Plans/List';
import PlansForm from '~/pages/Plans/Form';
import PlansEdition from '~/pages/Plans/Edition';
import Questions from '~/pages/Questions';
import Reply from '~/pages/Reply';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/studentlist" component={StudentList} isPrivate />
      <Route path="/studentform" component={StudentForm} isPrivate />
      <Route path="/studentedition" component={StudentEdition} isPrivate />
      <Route path="/enrollmentlist" component={EnrollmentList} isPrivate />
      <Route path="/enrollmentform" component={EnrollmentForm} isPrivate />
      <Route
        path="/enrollmentedition"
        component={EnrollmentEdition}
        isPrivate
      />
      <Route path="/planslist" component={PlansList} isPrivate />
      <Route path="/plansform" component={PlansForm} isPrivate />
      <Route path="/plansedition" component={PlansEdition} isPrivate />
      <Route path="/questions" component={Questions} isPrivate />
      <Route path="/reply" component={Reply} isPrivate />
    </Switch>
  );
}
