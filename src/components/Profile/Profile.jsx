import PropTypes from 'prop-types';
import { Avatar, Card, Description, Item, Label, Quantity, StatItems, UserInfo, UserName } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: {followers, views, likes} }) => {
  return (
    <Card>
      <Description>
        <Avatar
        src={avatar}
        alt="User avatar"
        />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <StatItems>
        <Item>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Item>
      </StatItems>
    </Card>
  );
};
 
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location:PropTypes.string.isRequired,
  avatar:PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
  })
}