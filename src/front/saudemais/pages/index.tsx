import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <div
      style={{ padding: 0, flex: 1, height: "100vh", backgroundColor: "gray" }}
    >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          height: "100%",
        }}
      >
        <div style={{ backgroundColor: "gray", flex: 0.5, height: "100%" }}>
          <p>Já Possui uma conta?</p>
          <p>Faça Login e encontre agora mesmo o seu Médico</p>
        </div>
        <div
          style={{
            backgroundColor: "white",
            flex: 1,
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        >
          <p>Criar uma conta</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
