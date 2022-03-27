import React from 'react';
import { FC } from 'react';

import { IAuthor } from '../libs/interfaces/IAuthor'
import Avatar from 'react-avatar';


const AvatarItem: FC<IAuthor> = ({ name, createdAt, updatedAt, avatar, id, postId}) => {

    return <>
        <div>
            <Avatar src={avatar} name={name} size="35" round="50px" />
        </div>
    </>
};

export default AvatarItem;