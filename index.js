// Given an array of Numbers return all possible permutations.
// Input: [1,2,3]                                  output: [
//  						[1,2,3]  
//  						[1,3,2]  
//  						[2,1,3]
//  						[2,3,1]  
//  						[3,1,2]  
//  						[3,2,1]    
// 					       ]


// This code is in java 


public class Main {
    
    public static void reverse(int[] arr , int start , int end ) {
        while(start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start ++;
            end --;
        }
    }
    
    public static void permutation(int[] arr , int num) {
        while(num > 0) {
            for(int v = 0; v<arr.length; v++) {
                if(v == arr.length-1) System.out.print(arr[v]);
                else System.out.print(arr[v] + ", ");
                
            }
            System.out.println("");
            
            int i = arr.length - 2;
            while(i >= 0 && arr[i] >= arr[i+1]) {
                i--;
            }
            
            if(i >= 0) {
                int j = arr.length - 1;
                while(arr[j] <= arr[i]) {
                    j--;
                }
                
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            
            reverse(arr , i+1 , arr.length-1);
            
            
            
            num--;
        }
    }
    
    public static int numOfPer(int n) {
        int fact = 1;
        for(int i = 2; i<=n; i++) {
            fact *= i;
        }
        return fact;
    }
    
    public static void main(String[] args) {
        int[] arr = {1,2,3};
        int num = numOfPer(arr.length);
        permutation(arr , num);
    }
}
