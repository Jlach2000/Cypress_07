Feature: Shopping Cart
    Scenario: Calculate total cost

    Given the following products are added to the shopping cart:
        Product     Price   
        Pralka      | 1800  |
        Słuchawki   | 100   |
        Mop         | 50     |
        When I calculate the total cost 

        Then the total cost should be 1950
      

