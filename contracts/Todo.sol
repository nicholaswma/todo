//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Todo {
    uint counter = 0;
    mapping(address => Task[]) ownerTask;  
    
    struct Task {
        uint date;
        string task;
        bool completed;
        uint index;
    }

    function createTask(string memory _task) public {
        uint currentCount = ownerTask[msg.sender].length + 1;
        ownerTask[msg.sender].push(Task({date: block.timestamp, task: _task, completed: false, index: currentCount}));
    }

    function completeTask(uint _index) public  {
        Task memory _task = ownerTask[msg.sender][_index];
        _task.completed = true;
        ownerTask[msg.sender][_index] = _task;
    }

    function getTasks() external view returns (Task[] memory) {
        return ownerTask[msg.sender];
    }
}