import gql from 'graphql-tag';
import { PureComponent } from 'react';
import { INextContextWithApollo } from '../types/NextContextWithApollo';

// Styles
import '../assets/styles/styles.less';

export default class Index extends PureComponent {
  public static async getInitialProps({
    apolloClient,
  }: INextContextWithApollo) {
    const response: any = await apolloClient.query({
      query: gql`
        {
          me {
            id
            username
            githubId
          }
        }
      `,
    });
    return response.data.me;
  }

  public render() {
    return <div>{JSON.stringify(this.props, null, 2)}</div>;
  }
}

// export default () => (
//   <ul>
//     <li>
//       <Link href="/a" as="/a">
//         <a>a</a>
//       </Link>
//     </li>
//     <li>
//       <Link href="/b" as="/b">
//         <a>b</a>
//       </Link>
//     </li>
//     <li>
//       <Test>{add(2, 4)}</Test>
//     </li>
//     <li>
//       <Link passHref href="http://localhost:4000/auth/github">
//         <Button icon="github" />
//       </Link>
//       <Flag name="th" />
//     </li>
//     <li>
//       <UserController>
//         {({ data, loading, error }: IUserControllerProps) => {
//           if (error) return null;
//           if (loading) return <div>loading…</div>;
//           return (
//             <ul>
//               {data.users.map(({ username, githubId }) => {
//                 return <li key={githubId}>{`${githubId} – ${username}`}</li>;
//               })}
//             </ul>
//           );
//         }}
//       </UserController>
//     </li>
//     <li>
//       <MeController>
//         {({ data, loading, error }: IMeControllerProps) => {
//           if (error) return null;
//           if (loading) return <div>loading…</div>;
//           return (
//             <ul>
//               {data.me && (
//                 <li key={data.me.githubId}>{`${data.me.githubId} – ${
//                   data.me.username
//                 }`}</li>
//               )}
//               {!data.me && <li>not loged in</li>}
//             </ul>
//           );
//         }}
//       </MeController>
//     </li>
//   </ul>
// );
