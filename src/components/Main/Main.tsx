import Card from "../Card/Card";
import { UserProfileProps } from "../../types/user";

type MainProps = {
  user: UserProfileProps;
};

const Main = ({ user }: MainProps) => {
  return (
    <div className="main">
      <Card title="Контактная информация">
        <p>Email: {user.contactInfo.email}</p>
        {user.contactInfo.phone && <p>Телефон: {user.contactInfo.phone}</p>}
      </Card>

      <Card title="Местоположение">
        {user.location ? (
          <>
            <p>Страна: {user.location.country}</p>
            <p>Город: {user.location.city}</p>
            <p>Адрес: {user.location.address}</p>
          </>
        ) : (
          <p>Местоположение не указано</p>
        )}
      </Card>

      <Card title="Интересы">
        {user.interests && user.interests.length > 0 ? (
          <ul>
            {user.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        ) : (
          <p>Интересы не указаны</p>
        )}
      </Card>
    </div>
  );
};

export default Main;
