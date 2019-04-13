import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Message from './Message';
import UiPlaceholder from './UiPlaceholder';

const App = () => {
  console.log(faker.image.avatar());
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to quit?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Sam"
          timeAgo="today 5:00PM"
          text="Great Mango Post!"
        />
      </ApprovalCard>

      {/*<ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Mango"
          timeAgo="today 300PM"
          text="Papaya Mango post"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Apple"
          timeAgo="today 2:00PM"
          text="Apple mango Post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          avatar={faker.image.avatar()}
          author="Papaya"
          timeAgo="today 6:00AM"
          text="Igba mango Post!"
        />
      </ApprovalCard> */}

      {/*<ApprovalCard>
      <CommentDetail
        avatar={faker.image.avatar()}
        author="Papaya"
        timeAgo="today 6:00AM"
        text="Igba mango Post!"
      />*/}
      <UiPlaceholder header="For your information">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, dolore
          dolor voluptatibus eveniet, illo sunt maiores veritatis dolores ad
          libero, exercitationem quasi mollitia autem eum doloremque velit
          nostrum adipisci. Velit beatae eaque explicabo totam vitae repudiandae
          earum doloremque nobis cum.
        </p>
      </UiPlaceholder>

      <UiPlaceholder>
        <div className="ui icon header">
          <i className="pdf file outline icon"></i>
          No documents are listed for this customer.
        </div>
        <div className="ui primary button">Add Document</div>
      </UiPlaceholder>

      <Message
        header="Attention!"
        text="We just updated our privacy policy here to better service our customers."
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
