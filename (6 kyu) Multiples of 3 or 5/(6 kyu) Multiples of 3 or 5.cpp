int solution(int number)
{
    int result = 0;
    int i;
    for (i = 1; i < number; i++)
    {
        if (i % 3 == 0 || i % 5 == 0)
        {
            result += i;
        }
    }
    return result;
}