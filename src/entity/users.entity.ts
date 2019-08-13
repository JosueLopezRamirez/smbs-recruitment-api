import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;
}