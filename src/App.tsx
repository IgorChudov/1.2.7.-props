import './App.css';
import Description from './components/Description/Description';
import Main from './components/Main/Main';
import { UserProfileProps } from "./types/user";

const userProfile: UserProfileProps = {
  userName: 'Дэн', // обязательное свойство
  protoUrl: null, // необязательное свойство
  userDescription: 'Любитель React и фронтенд разработки', // обязательное свойство
  openForWork: true, // необязательное свойство
  contactInfo: {
    // обязательное свойство
    email: 'abramov@example.com', // обязательное свойство
    phone: '+1234567890', // необязательное свойство
  },
  location: {
    // необязательное свойство
    city: 'Москва', // обязательное свойство
    country: 'Россия', // обязательное свойство
    address: 'Большая полянка 44', // необязательное свойство
  },
  interests: ['программирование', 'путешествия', 'фотография'], // необязательное свойство
};

function App() {

  return (
    <>
      <Description user={userProfile} />
      <Main user={userProfile} />
    </>
  );
}

export default App;
