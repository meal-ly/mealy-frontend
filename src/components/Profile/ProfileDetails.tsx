import * as React from "react";
import Button from "../Common/Button";
import Divider from "../Common/Divider";
import { IUserProfile } from "../../store/profile/types";

interface IProfileProps {
  profile: IUserProfile;
}

const ProfileDetails = (props: IProfileProps) => {
  const { profile } = props;
  return (
    <div className="column">
      <img
        src="assets/user.png"
        alt="avatar"
      />
      <h2>{`${profile.name} ${profile.lastName}`}</h2>
      <p className="plan">Plan Premium</p>
      <Button variant="rounded" >
        Recetas que te gustaron
      </Button>
      <Divider />
      <p>DATOS DE TU CUENTA</p>
      <div className="profile-data column">
        <p className="profile-data-label">
          Nombre
        </p>
        <p className="profile-data-text">
          {profile.name}
        </p>
        <Divider />
        <p className="profile-data-label">
          Apellido
        </p>
        <p className="profile-data-text">
          {profile.lastName}
        </p>
        <Divider />
        <p className="profile-data-label">
          Dirección
        </p>
        <p className="profile-data-text">
          {profile.address}
        </p>
        <Divider />
        <p className="profile-data-label">
          Método de pago
        </p>
        <img
          src="assets/tarjeta.png"
          alt="avatar"
        />
        <div className="edit-card-container row">
          <p className="profile-data-label">Cambiar tarjeta</p>
          <p className="profile-data-label">Eliminar tarjeta</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
