
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../AdminHeader";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Box,
    Flex,
  } from "@chakra-ui/react";
  import { wrap } from "framer-motion";

const GetAllFranchise = () => {
     
    const [franchise, setFranchise] = useState();
    const [loading, setLoading] = useState(false);
    const [id, SetId] = useState();
    const [varified,setverified] = useState();
    
     
    const findfranchise = async () => {
        try {
    
            setLoading(true)
          const franchise = await axios.get(
            "https://computerbackend-1.onrender.com/api/admin/get-all-franchises"
          );
    
          setLoading(false);
          if (franchise) {
            console.log(franchise.data.data );
            
            setFranchise(franchise.data.data);
            // console.log(franchise[0],"khkh");
            // toast.success("successfuly frachise data found");
          } else {
            toast.error("data not found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        findfranchise();
        // console.log(franchise[0].isVerified,"khkh");
      }, []);


  return (
    <div>
       <AdminHeader/>
        
       <TableContainer >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>NameOfInstitute</Th>
              <Th>EmailHead</Th>
              <Th>dob</Th>
              <Th>Gender</Th>
              <Th>District</Th>
              <Th>Course Id</Th>
              <Th>MobileInstitute </Th>
              <Th>EmailIdOfInstitute</Th>
              <Th>NameOfCentralHead</Th>
              <Th>NameOfInstitute</Th>
              <Th>PostalAdressOfInstitute</Th>
              <Th>state</Th>
              <Th>Town</Th>
              <Th>Pincode</Th>
              <Th>isVerified</Th>


              
            </Tr>
          </Thead>
          <Tbody>
            {!franchise ? (
              <h1>loading</h1>
            ) : (
              franchise.map((item) => {
                return (
                  <>
                    <Tr>
                    <Td>{item._id}</Td>
                      <Td>{item.nameOfInstitute}</Td>
                      <Td>{item.emailHead}</Td>
                      <Td>{item.dateofBirth}</Td>
                      <Td>{item.gender}</Td>
                      <Td>{item.district}</Td>
                      <Td>{item.mobileInstitute}</Td>
                      <Td>{item.emailIdOfInstitute}</Td>
                      <Td>{item.nameOfCentralHead}</Td>
                      <Td>{item.nameOfInstitute}</Td>
                      <Td>{item.postalAdressOfInstitute}</Td>
                      <Td>{item.nameOfCentralHead}</Td>
                      <Td>{item.state}</Td>
                      <Td>{item.town}</Td>
                      <Td>{item.pin}</Td>
                      <Td>{item.isVerified ? 'verified' : 'not verified'}</Td>
                      
                     
                    </Tr>
                  </>
                );
              })
            )}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>

       <ToastContainer />
    </div>
  )
}

export default GetAllFranchise
