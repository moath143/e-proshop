import React, { useState, useEffect } from "react";
import { Container, Section, Ulist } from "../../style/globalStyle";
import { ProfileSection, Dashboard, Information } from "./profileStyle";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import Button from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { userProfileThunk } from "../../store/reducers/userSlice";
import ModalComp from "../../components/modal/ModalComp";
import Modal from "react-modal";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userStorage = JSON.parse(localStorage.getItem("user"));
  const { isAuth, user } = useSelector((state) => state.authStore);
  const profileData = useSelector((state) => state.userStore);
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    // window.location.reload(true);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    dispatch(userProfileThunk());
  }, []);
  return (
    <Section height={"calc(100vh - 82px)"} padding={"30px 0"}>
      <Container>
        <ProfileSection>
          <Dashboard>
            <div className="photo">
              <Avatar
                name="Wim Mostmans"
                size="150"
                round={true}
                src={
                  profileData.profile.profileImage ||
                  "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                }
              />
              <p>
                {profileData.profile.firstName} {profileData.profile.lastName}
              </p>
            </div>
            <Ulist>
              <li>
                <Link to="/">my orders</Link>
              </li>
              <li>
                <Link to="/">wishlist</Link>
              </li>
              <li>
                <Link to="/">notifcations</Link>
              </li>
              <li>
                <Link to="/">settings</Link>
              </li>
              <li>
                {isAuth ? (
                  <Link onClick={handleLogout} to="/login">
                    logout
                  </Link>
                ) : (
                  ""
                )}
                {/* <Link onClick={handleLogout} to="/">
                  logout
                </Link> */}
              </li>
            </Ulist>
          </Dashboard>
          <Information>
            <div className="info">
              <p>my profile</p>
              <Ulist>
                <li>
                  <span>first name</span>
                  <p>{profileData.profile.firstName}</p>
                </li>
                <li>
                  <span>last name</span>
                  <p> {profileData.profile.lastName} </p>
                </li>
                <li>
                  <span>email</span>
                  <p> {profileData.profile.email} </p>
                </li>
                <li>
                  <span>birthday</span>
                  <p> {profileData.profile.dateOfBirth.slice(0, 10) || "-"} </p>
                </li>
              </Ulist>
              <Button text={"change password"} />
            </div>
            <div className="update-photo">
              <Avatar
                name="Wim Mostmans"
                size="150"
                round={true}
                src={
                  profileData.profile.profileImage ||
                  "http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3"
                }
              />
              <Button
                onClick={() => setIsOpen(true)}
                text={"upload new photo"}
              />
              <ModalComp modalIsOpen={modalIsOpen} closeModal={closeModal} />
            </div>
          </Information>
        </ProfileSection>
      </Container>
    </Section>
  );
};

export default Profile;
