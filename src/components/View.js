import React, { useState, useEffect } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const View = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://r6t8btj28d.execute-api.us-east-1.amazonaws.com/Dev/user');
            const data = await response.json();
            setUsers(data.users);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <Box>
            <h1>View User</h1>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Date of Birth</TableCell>
                            <TableCell>Sex</TableCell>
                            <TableCell>Phone Number</TableCell>
                            <TableCell>Year of Joining</TableCell>
                            <TableCell>Year of Graduation</TableCell>
                            <TableCell>Club</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.dob}</TableCell>
                                <TableCell>{user.sex}</TableCell>
                                <TableCell>{user.phoneNumber}</TableCell>
                                <TableCell>{user.joinedYear}</TableCell>
                                <TableCell>{user.graduateYear}</TableCell>
                                <TableCell>{user.club}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default View;
