function skillsMember()
{
    // declare an array of objects
    var members = [
        { name: 'John', skills: ['JavaScript', 'React', 'Node', 'Python'] },
        { name: 'Jane', skills: ['JavaScript', 'React', 'Node', 'Python', 'Django'] },
        { name: 'Jack', skills: ['JavaScript', 'React', 'Node', 'Python', 'Flask'] },
    ]

    // iterate through the array
    for (var i = 0; i < members.length; i++)
    {
        // get the member object from the array
        var member = members[i];

        // print the member name
        console.log(member.name + ' knows:');

        // iterate through the skills array of the member
        for (var j = 0; j < member.skills.length; j++)
        {
            // print the skill
            console.log(member.skills[j]);
        }
    }
}