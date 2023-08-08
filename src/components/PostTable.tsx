import { Table, Button } from "semantic-ui-react";
import { Post } from "./PostContent";
import "semantic-ui-css/semantic.min.css";
import EditForm from "./EditForm";
import App from "../App";
interface PostTable {
  listPosts: Post[];
  deletePost: (postId: any) => void;
  handleUpdate: (post: Post) => Promise<void>;
}
const PostTable = (props: PostTable) => {
  return (
    <>
      <h1 style={{ marginLeft: "30px" }}>Post List</h1>
      <Table
        celled
        style={{
          border: "1px solid purple",
          textAlign: "center",
        }}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Content</Table.HeaderCell>
            <Table.HeaderCell>user</Table.HeaderCell>
            <Table.HeaderCell>Group</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.listPosts.map((post) => (
            <Table.Row key={post.postId}>
              <Table.Cell>{post.postId}</Table.Cell>
              <Table.Cell>{post.content}</Table.Cell>
              <Table.Cell>{post.fullName}</Table.Cell>
              <Table.Cell>{post.groupName}</Table.Cell>
              <Table.Cell>
                <img
                  style={{ width: 100, height: 70 }}
                  src={`https://localhost:44332/images/${post.postImage}`}
                ></img>
              </Table.Cell>

              <Table.Cell>
                {/* <EditForm handleUpdate={props.handleUpdate}/> */}
                <Button negative onClick={() => props.deletePost(post.postId)}>
                  {" "}
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
export default PostTable;
