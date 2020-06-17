import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Austin McCalley</title>
      </Head>

      <nav className="row">
        <div className="col">
          <h2>Personal Trainer</h2>
        </div>
      </nav>

      <main>
        <div className="wrap">
          <div className="row">
            <div className="col">
              <img src="/login.svg" alt="Login Image" className="login_image" />

            </div>
            <div className="col login">
              <form>
                <input className="uname" placeholder="username" type="username">

                </input>
                <br />
                <input className="pass" placeholder="password" type="password">

                </input>

              </form>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a href="https://quedev.xyz/" target="_blank">
          <p>Austin McCalley &copy; 2020</p>
        </a>
      </footer>

      <style jsx>{`

        .uname {
          border: none;
          border-bottom: 1.5px solid;
        }
        .pass {
          border: none;
          border-bottom: 1.5px solid;
        }

        .login {
          display: flex;;
          align-items: center;
          justify-content: center;
        }

        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 100%;
        }

        .col {
          display: flex;
          flex-direction: column;
          width: 50%;
        }

        .col_right {
          text-align:right;
        }
        .login_image {
          width: 50%;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css?family=Roboto:400|Poppins:400');

        html,
        body {
          padding: 0;
          margin: 0;
          font-family:'Roboto',sans-serif;

        }


html {font-size: 100%;} /*16px*/

body {
  background-color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  color: #333;
}

p {margin-bottom: 1.15rem;}

h1, h2, h3, h4, h5 {
  margin: 2.75rem 0 1.05rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.15;
}

h1 {
  margin-top: 0;
  font-size: 3.052em;
}

h2 {font-size: 2.441em;}

h3 {font-size: 1.953em;}

h4 {font-size: 1.563em;}

h5 {font-size: 1.25em;}

small, .text_small {font-size: 0.8em;}

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div >
  )
}
