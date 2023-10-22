import React from "react";
import Container from "../components/Container";
import SideBar from "../components/SideBar";
import styles from "./styles.module.css";
import Remove from "../components/Remove";

const page = () => {
  return (
    <Container>
      <div className={styles.dashboard}>
        <SideBar />
        <div className={styles.dashboardArea}>
          <p>Personal and organizational settings</p>
          <h1>Settings</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            consectetur voluptatem atque repudiandae fuga eligendi error nobis
            delectus rem animi perferendis doloribus sus.
          </p>
          <div>
            <p>Organization Settings</p>
            <div>
              <div className="org">
                <h3>Organization name</h3>
                <p>Enle Co</p>
              </div>
              <div className="invite">
                <h3>Invite members</h3>
                <div>
                  <input type="text" placeholder="dave@enle.co" />
                  <button>invite</button>
                </div>
              </div>
            </div>
            <section className="mt-3 removeSection">
              <p>Remove members</p>
              <div className="_remove">
                <p>
                  david@enle.co <Remove />{" "}
                </p>
              </div>
            </section>
            <div className="mt-3">
              <button className="deleteButton">Delete organization</button>
              <section className="changes">
                <button className="cancelButton">cancel</button>

                <button className="saveButton">save changes</button>
              </section>
            </div>
          </div>
          <div className="mt-4">
            <p>Personal Settings</p>
            <div>
              <div className="custom">
                <p>Full Name</p>
                <input type="text" placeholder="Emeka John" />
              </div>
              <div>
                <div className="custom">
                  <p>email</p>
                  <input type="email" placeholder="test@test.com" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="custom">
                <p>Current Password</p>
                <input type="password" placeholder="**********" />
              </div>
              <div>
                <div className="custom">
                  <p>New Password</p>
                  <input type="password" placeholder="**********" />
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button className="deleteButton">Delete account</button>
              <section className="changes">
                <button className="cancelButton">cancel</button>

                <button className="saveButton">save changes</button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default page;
