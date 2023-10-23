"use client";

import React, { useState, useEffect } from "react";
import Container from "../components/Container";
import SideBar from "../components/SideBar";
import styles from "./styles.module.css";
import Remove from "../components/Remove";

import api from "../components/api";
import { useToast, Spinner } from "@chakra-ui/react";
import IsAuth from "../components/IsAuth";

const page = () => {
  const [memberEmail, setMemberEmail] = useState("");
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const getMembers = async () => {
    const data = await api.getMembers();
    console.log(data);
    setMembers(data.members);
  };

  const addMember = async (e) => {
    setLoading(true);
    e.preventDefault();
    const allMembers = members.map((i) => {
      return i.email;
    });
    if (allMembers.includes(memberEmail)) {
      toast({
        status: "info",
        title: "member already exists",
        position: "top",
        duration: 7000,
        isClosable: true,
      });
      setLoading(false);

      return;
    }
    try {
      await api.addMember(memberEmail);
      await getMembers();
      toast({
        status: "success",
        title: "member added",
        position: "top",
        duration: 7000,
        isClosable: true,
      });
      setMemberEmail("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast({
        status: "error",
        title: `${error.response.data.msg}`,
        position: "top",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    getMembers();
  }, []);

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
                <form onSubmit={addMember}>
                  <input
                    onChange={(e) => setMemberEmail(e.target.value)}
                    value={memberEmail}
                    type="email"
                    placeholder="dave@enle.co"
                    required
                  />
                  {loading ? (
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="lg"
                    />
                  ) : (
                    <button type="submit">invite</button>
                  )}
                </form>
              </div>
            </div>
            <section className="mt-3 removeSection">
              <p>Remove members</p>

              <div className="_remove">
                {members &&
                  members.map((member) => (
                    <p key={member._id}>
                      {member.email}{" "}
                      <Remove memberId={member._id} setMembers={setMembers} />{" "}
                    </p>
                  ))}
                {/* <p>
                    david@enle.co <Remove />{" "}
                  </p>
                  <p>
                    david@enle.co <Remove />{" "}
                  </p> */}
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

export default IsAuth(page);
