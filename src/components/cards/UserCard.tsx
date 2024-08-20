import { Avatar, Button, Card, Divider } from "antd";
import Meta from "antd/es/card/Meta";
import User from "../../interface/userInterface";

function UserCard({ user }: { user: Partial<User> }) {
  return (
    <div>
      <Card style={{ textAlign: "center", borderRadius: 10 }}>
        <Avatar src={user.avatar_url} size={90} />
        <Divider />
        <Meta title={user.login} description={user.name} />
        <p> from {user.location}</p>
        <Button type="primary" href={user.html_url}>
          Visit Profile
        </Button>
      </Card>
    </div>
  );
}

export default UserCard;
