//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Todo {
    uint counter = 0;
    mapping (uint => Task) Tasks;
    
    struct Task {
        uint date;
        string task;
        bool completed;
    }

    function createTask(string memory _task) public {
        Tasks[counter]= Task(block.timestamp, _task, false);
        counter++;
    }

    function getTasks(uint _taskIndex) external view returns (Task memory) {
      return Tasks[_taskIndex];
    }
}