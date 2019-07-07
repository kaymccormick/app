import{Entity, Column, PrimaryGeneratedColumn,OneToOne} from 'typeorm';

import BaseModel from '../BaseModel';
import File from './File';

@Entity()
export default class FileContent extends BaseModel {
  @OneToOne(type => File, file => file.content)
    file?: File;

  @Column({type: 'varbinary'})
  data: any;  
}
