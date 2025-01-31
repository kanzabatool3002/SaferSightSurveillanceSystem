import { Container, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useSelector } from 'react-redux';
import AdminSidebar from './AdminHeader';
import './main.css'



const AdminHero = () => {

  const { adminInfo } = useSelector( (state) => state.adminAuth);


  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          
          { adminInfo ? 
            <>
            <AdminSidebar/>
              <h2 className='text-center mb-4'> Welcome back Admin {adminInfo.name} </h2>
              <p className='text-center mb-4'> Email: {adminInfo.email} </p>
              <div className='d-flex'>
                <LinkContainer to='/admin/manage-users'>
                    <button variant='primary' className='main-btn'>
                    Manage Users
                    </button>
                </LinkContainer>
              </div>
            </>
            : 
            <>
            
              {/* <h1 className="text-center mb-4 color-black"> Safer Sight Admin  </h1> */}
              <h1 style={{ color: 'black', textAlign: 'center', marginBottom: '1rem' }}> Safer Sight Admin  </h1>
              <p className='text-center mb-4'> Please Login to access Admin Dashboard </p>
              <div className='d-flex'>
                <LinkContainer to='/admin/login'>
                    <button variant='primary' className='hero-btn'>
                    Login
                    </button>
                </LinkContainer>
                <LinkContainer to='/admin/register'>
                    <button variant='primary' className='hero-btn'>
                    Signup
                    </button>
                </LinkContainer>
              </div>
            </> 
          }

        </Card>
      </Container>
    </div>
  );
};

export default AdminHero;