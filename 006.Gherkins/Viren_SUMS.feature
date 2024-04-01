Feature: Software Update Management  

    Scenario: Mapping of resources to the software
        Given the software and resources are added to the system 
        When the software update is available
        Then the sotware is mapped with appropriate resources for update

    Scenario: Update the software
        Given the software is mapped with the appropriate resources
        When the reliable update of software available
        Then update the software on all the mapped resources

    Scenario: Scheduling based on the priority-group of Software Update
        Given there is a need to update the software in all mapped resources
        When the update is scheduled on the system 
        Then the system should allow software update based on the priority-group

    Scenario: Perpose of software update management system
        Given a company's reliance on numerous software applications,
        When faced difficulties in effectively managing and installing updates,
        Then the implementation of a Software Update Management System becomes essential.   
    
    Scenario: Handle multiple software applications
        Given the software update management system is running
        When updates are available for multiple software applications 
        Then the system should be able to handle multiple software applications

