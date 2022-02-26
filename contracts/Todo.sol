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

    function completeTask(uint[] memory _index) public  {
        for (uint i = 0; i < _index.length; i++) {
            Task memory _task = ownerTask[msg.sender][i];
            _task.completed = true;
            ownerTask[msg.sender][i] = _task;
        }
    }

    function getTasks() external view returns (Task[] memory) {
        return ownerTask[msg.sender];
    }
}