
import { Suspense } from 'react';
import './App.css'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import OrderContainer from './components/OrderContainer';
import States from './components/States'
import { ToastContainer } from 'react-toastify';

const loadOrders = () => fetch('/orders.json').then((res) => res.json());

function App() {
  
  const ordersPromise = loadOrders();
  // console.log(ordersPromise);

  return (
    <>
     <div>
      <header className='w-11/12 mx-auto py-3'>
           <Navbar></Navbar>
      </header>

      <section>
        <Heading title={`Kitchen Room`}></Heading>
      </section>
      <section>
        <Suspense fallback={"Loading......"}>
          <OrderContainer promise = {ordersPromise}></OrderContainer>
        </Suspense>
     </section>

     <ToastContainer></ToastContainer>
     </div>

    </>
  )
}

export default App
