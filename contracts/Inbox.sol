// SPDX-License-Identifier:UNLICENSED
pragma solidity ^0.8.13;

contract inbox{
 string public message;

    function Inbox(string memory _msg) public{
        message =_msg;
    }
    function setMessage(string memory _newmsg) public{
        message =_newmsg;
    }

}