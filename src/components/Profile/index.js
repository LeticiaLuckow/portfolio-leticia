import { ImgPerfil } from './styles';

const Profile = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: '#cfabb1',
      }}
    >
      <ImgPerfil src="/leticia-banner.png" alt="Foto Pessoal" />
    </div>
  );
};

export default Profile;
