import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiLoginCircleFill } from "react-icons/ri";
import { FiX } from "react-icons/fi";
import { signIn, signOut, useSession } from "next-auth/client";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();

  return session ? (
    <button
      type='button'
      className={styles.signInButton}
      onClick={() => signOut()}
    >
      <RiLoginCircleFill color='#04d361' />

      {session.user.name}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <>
      <button
        type='button'
        className={styles.signInButton}
        onClick={() => signIn("google")}
      >
        <FcGoogle />
        Sign In with Google
      </button>

      <button
        type='button'
        className={styles.signInButton}
        onClick={() => signIn("github")}
      >
        <FaGithub color='#eba417' />
        Sign In with GitHub
      </button>
    </>
  );
}
