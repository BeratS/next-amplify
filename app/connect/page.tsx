import PhylloWidget from '../../components/widgets/ConnectPhyllo';
import { getToken } from './actions';

export default async function ConnectPage() {
  const token = await getToken(); // Server Action

  return (
    <div>
      <h1>Connect Your Account</h1>
      {/* PhylloWidget accepts token */}
      {token ? <PhylloWidget token={token} /> : <p>Loading...</p>}
    </div>
  );
}
