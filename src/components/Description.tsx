import defaultUserPhoto from '../assets/photo-default.svg';
import { UserProfileProps } from '../types/user';

type DescriptionProps = {
  user: UserProfileProps;
};

const Description = ({ user }: DescriptionProps) => {
  const photoSrc = user.protoUrl || defaultUserPhoto;

  return (
    <div className="description">
      <img className="photo--default" src={photoSrc} />
      <h4>{user.userName}</h4>
      <p>{user.userDescription}</p>
      {user.openForWork && <p>В поиске работы</p>}
    </div>
  ) 
}

export default Description;