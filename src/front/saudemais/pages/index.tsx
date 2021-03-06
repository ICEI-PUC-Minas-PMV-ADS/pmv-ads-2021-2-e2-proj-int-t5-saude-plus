import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useMutation } from "react-query";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface IForm {
  PrimeiroNome: string;
  Sobrenome: string;
  Telefone: string;
  CPF: string;
  Genero: string;
  CRM: string;
  AreaAtuacao: string;
  Email: string;
  Senha: string;
}

function Form() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [form, setForm] = useState<IForm>({
    PrimeiroNome: "",
    Sobrenome: "",
    Telefone: "",
    CPF: "",
    Genero: "",
    CRM: "",
    AreaAtuacao: "",
    Email: "",
    Senha: "",
  });
  const mutation = useMutation(() => {
    return axios.post(
      "http://localhost:5000/api/cadastro",
      JSON.stringify(form),
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json; charset=utf-8",
        },
      }
    );
  });

  return (
    <div>
      {mutation.isLoading && (
        <div>
          <Modal
            open={true}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <CircularProgress />
            </Box>
          </Modal>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "row", marginTop: 40 }}>
        <div
          style={{ display: "flex", flexDirection: "column", marginRight: 80 }}
        >
          <TextField
            value={form.PrimeiroNome}
            onChange={(event) => {
              setForm({ ...form, PrimeiroNome: event.currentTarget.value });
            }}
            id="outlined-basic"
            label="Primeiro nome"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, Telefone: event.currentTarget.value });
            }}
            value={form.Telefone}
            id="outlined-basic"
            label="Telefone"
            variant="outlined"
            style={{ marginTop: 24, width: 260 }}
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, Genero: event.currentTarget.value });
            }}
            value={form.Genero}
            id="outlined-basic"
            label="G??nero"
            variant="outlined"
            style={{ marginTop: 24 }}
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, Email: event.currentTarget.value });
            }}
            value={form.Email}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginTop: 24 }}
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, Senha: event.currentTarget.value });
            }}
            value={form.Senha}
            id="outlined-basic"
            label="Confirme seu email"
            variant="outlined"
            style={{ marginTop: 24 }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            onChange={(event) => {
              setForm({ ...form, Sobrenome: event.currentTarget.value });
            }}
            value={form.Sobrenome}
            id="outlined-basic"
            label="Sobrenome"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, CPF: event.currentTarget.value });
            }}
            value={form.CPF}
            id="outlined-basic"
            label="CPF"
            variant="outlined"
            style={{ marginTop: 24, width: 260 }}
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, AreaAtuacao: event.currentTarget.value });
            }}
            value={form.AreaAtuacao}
            id="outlined-basic"
            label="??rea de atua????o"
            variant="outlined"
            style={{ marginTop: 24 }}
          />
          <TextField
            onChange={(event) => {
              setForm({ ...form, CRM: event.currentTarget.value });
            }}
            value={form.CRM}
            id="outlined-basic"
            label="CRM"
            variant="outlined"
            style={{ marginTop: 24 }}
          />
        </div>
        <div style={{ marginTop: 80 }}></div>
      </div>
      <div style={{ marginTop: 80 }}>
        <Button
          onClick={() => {
            mutation.mutate();
            setForm({
              PrimeiroNome: "",
              Sobrenome: "",
              Telefone: "",
              CPF: "",
              Genero: "",
              CRM: "",
              AreaAtuacao: "",
              Email: "",
              Senha: "",
            });
          }}
          variant="contained"
          style={{
            backgroundColor: "#ECECEC",
            width: 300,
            height: 50,
            color: "black",
          }}
        >
          CRIAR CONTA
        </Button>
      </div>
    </div>
  );
}

const Home: NextPage = () => {
  return (
    <div
      style={{ padding: 0, flex: 1, height: "100vh", backgroundColor: "gray" }}
    >
      <Head>
        <title>Sa??de Mais +</title>
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
        <div
          style={{
            backgroundColor: "gray",
            flex: 0.5,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p
                style={{
                  fontWeight: "normal",
                  fontSize: 44,
                  textAlign: "center",
                }}
              >
                SAUDE.PLUS
              </p>
              <p
                style={{
                  marginLeft: 12,
                  fontWeight: "normal",
                  fontSize: 44,
                }}
              >
                +
              </p>
            </div>
            <div>
              <p style={{ fontSize: 22, textAlign: "center" }}>
                J?? possui uma conta?
              </p>
              <p style={{ fontSize: 22, textAlign: "center" }}>
                Fa??a login e encontre agora mesmo o seu m??dico!
              </p>
            </div>
          </div>
          <div style={{ marginTop: 90 }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#ECECEC",
                width: 200,
                height: 50,
                color: "black",
              }}
            >
              LOGIN
            </Button>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            flex: 1,
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 34 }}>Criar uma conta</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
