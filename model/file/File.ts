import{Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn} from 'typeorm';

import BaseModel from '../BaseModel';
import FileContent from './FileContent';

@Entity()
export default class File extends BaseModel {
  @OneToOne(type => FileContent, content => content.file)
  @JoinColumn()
    public content?: FileContent;
}
  