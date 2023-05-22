import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useNavigate, useNavigationType, useParams } from 'react-router-dom';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import { ThemeProvider, createTheme } from '@material-ui/core';
import GitHubIcon from './IconGitHub.js';
import qs from 'qs';
import axios from 'axios';

const gitOAuthBtntheme = createTheme({
  //#24292D
  palette: {
    secondary: {
      main: '#24292d',
      constrastText: '#fff',
    },
  },
});

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  function gitHubOAuthLogin(event) {
    event.preventDefault();
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const params = {
      client_id: '5a189d6a94d99c8375eb',
      redirect_uri: 'http://127.0.0.1:3000/sign-in',
      scope: 'user',
      response_type: 'code',
    };

    const paramsQS = qs.stringify(params);
    window.location.href = GITHUB_URL + '?' + paramsQS;
  }

  async function getCredentialsByOAuthGit() {
    const { code } = qs.parse(location.search, { ignoreQueryPrefix: true });

    try {
      if (code) {
        const response = await axios.post('http://localhost:4000/auth/sign-in/oauth/github', {
          code,
        });
        const userData = response.data;
        setUserData(userData);
        toast('Login realizado com sucesso!');
        navigate('/dashboard');
      }
    } catch (error) {
      toast('Não foi possível fazer o login!');
    }
  }

  useEffect(() => {
    getCredentialsByOAuthGit();
  }, []);

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
          <ThemeProvider theme={gitOAuthBtntheme}>
            <Button
              type="button"
              color="secondary"
              fullWidth
              disabled={loadingSignIn}
              startIcon={<GitHubIcon />}
              onClick={gitHubOAuthLogin}
            >
              Entrar com GitHub
            </Button>
          </ThemeProvider>
        </form>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
