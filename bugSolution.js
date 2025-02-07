The solution is to ensure that the component using `useParams` is a direct child of a route with the appropriate path parameter.

```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function UserDetail({ userId }) {
  return <div>User Details for ID: {userId}</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserDetail/>}/>
      </Routes>
    </BrowserRouter>
  );
}

```
In this corrected code, the `UserDetail` component now correctly receives parameters.  The `useParams` hook must always be used within a component rendered by a route that matches a path containing parameters.