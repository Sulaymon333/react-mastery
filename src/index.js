import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:40PM"
          content="Great blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 5:00PM"
          content="Great blog mango!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <CommentDetail
        author="Mango"
        timeAgo="Today at 2:00AM"
        content="Great blog Papaya!"
        avatar={faker.image.avatar()}
      />

      <CommentDetail
        author="Apple"
        timeAgo="Today at 1:00AM"
        content="Great blog Apple!"
        avatar={faker.image.avatar()}
      />

      <Message
        header="Attention!"
        text="We just updated our privacy policy here to better service our customers."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
