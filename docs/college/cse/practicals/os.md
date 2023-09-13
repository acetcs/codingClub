# Operating System Programs

::: tip **Pro Tip** :sunglasses:
Most of the online compilers sometimes don't have the specific modules available that we use in our programs but almost every module is available on **[Tio.run](https://tio.run)**. Just select the language and you are good to go.
:::

<br>

<a href="../../../public/pdfs/OS_Lab_manual.pdf">
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">View Lab Manual</button>
</a>
&nbsp;
<a href="../../../public/pdfs/OS_Lab_manual.pdf" download>
<button style="border: none; padding:10px; border-radius: 7px; background: #10b981 ; color:white; font-weight:800;">Download Lab Manual</button>
</a>

## Experiment 2
### Experiment 2-A
```C
#include<stdio.h> 
#include<dirent.h>
#include<stdlib.h>
struct dirent *dptr; 
int main(int argc, char *argv[])
{
char buff[100];
DIR *dirp;
printf("\n\n ENTER DIRECTORY NAME: ");
scanf("%s", buff);
if((dirp=opendir(buff)) == NULL)
{
printf("The given directory does not exist.");
exit(1);
}
while(dptr=readdir(dirp))
{
printf("%s\n",dptr->d_name);
}
closedir(dirp);
}
```

### Experiment 2-B
```C

#include<stdio.h> 
#include<unistd.h> 
#include<stdlib.h> 
int main()
{
int pid, pid1,pid2;
pid=fork(); 
if(pid==-1)
{
printf("ERROR IN PROCESS CREATION \n");
exit(1);
}

if(pid!=0)
{
pid1=getpid();
printf("\n the parent process ID is %d\n", pid1);
}
else
{
pid2=getpid();
printf("\n the child process ID is %d\n", pid2);
}
}
```

## Experiment 3
### Experiment 3-A (FCFS)
```C

#include <stdio.h>
#include <stdlib.h>
int main(){
 int RQ[100], i, n, TotalHeadMoment = 0, initial;
 printf("Enter the number of Requests\n");
 scanf("%d", &n);
 printf("Enter the Requests sequence\n");
 for (i = 0; i < n; i++)
 scanf("%d", &RQ[i]);
 printf("Enter initial head position\n");
 scanf("%d", &initial);
 for (i = 0; i < n; i++){
 TotalHeadMoment = TotalHeadMoment + abs(RQ[i] - initial);
 initial = RQ[i];
 }
 printf("Total head moment is %d \n", TotalHeadMoment);
 return 0;
}
```

### Experiment 3-B (SSTF)
```C

#include <stdio.h>
#include <stdlib.h>
int main(){
 int RQ[100], i, n, TotalHeadMoment = 0, initial, count = 0;
 printf("Enter the number of Requests\n");
 scanf("%d", &n);
 printf("Enter the Requests sequence\n");
 for (i = 0; i < n; i++)
 scanf("%d", &RQ[i]);
 printf("Enter initial head position\n");
 scanf("%d", &initial);
 while (count != n){
 int min = 1000, d, index;
 for (i = 0; i < n; i++){
 d = abs(RQ[i] - initial);
 if (min > d){
 min = d;
 index = i; }
 }
 TotalHeadMoment = TotalHeadMoment + min;
 initial = RQ[index];
 RQ[index] = 1000;
 count++;
 }
 printf("Total head movement is %d \n", TotalHeadMoment);
 return 0;
}

```

### Experiment 3-C (SCAN)
```C

#include <stdio.h>
int request[50];
int SIZE;
int pre;
int head;
int uptrack;
int downtrack;
struct max{
 int up;
 int down;
} kate[50];
int dist(int a, int b){
 if (a > b)
 return a - b;
 return b - a;
}
void sort(int n){
 int i, j;
 for (i = 0; i < n - 1; i++){
 for (j = 0; j < n - i - 1; j++){
 if (request[j] > request[j + 1]){
 int temp = request[j];
 request[j] = request[j + 1];
 request[j + 1] = temp;
 }
 }
 }
 j = 0;
 i = 0;
 while (request[i] != head){
 kate[j].down = request[i];
 j++;
 i++;
 }
 downtrack = j;
 i++;
 j = 0;
 while (i < n){
 kate[j].up = request[i];
 j++;
 i++;
 }
 uptrack = j;
}
void scan(int n){
 int i;
 int seekcount = 0;
 printf("SEEK SEQUENCE = ");
 sort(n);
 if (pre < head){
 for (i = 0; i < uptrack; i++){
 printf("%d ", head);
 seekcount = seekcount + dist(head, kate[i].up);
 head = kate[i].up;
 }
 for (i = downtrack - 1; i > 0; i--){
 printf("%d ", head);
 seekcount = seekcount + dist(head, kate[i].down);
 head = kate[i].down;
 }
 }
 else{
 for (i = downtrack - 1; i >= 0; i--){
 printf("%d ", head);
 seekcount = seekcount + dist(head, kate[i].down);
 head = kate[i].down;
 }
 for (i = 0; i < uptrack - 1; i++){
 printf("%d ", head);
 seekcount = seekcount + dist(head, kate[i].up);
 head = kate[i].up;
 }
 }
 printf(" %d\nTOTAL DISTANCE :%d", head, seekcount);
}
int main(){
 int n, i;
 printf("ENTER THE DISK SIZE :\n");
 scanf("%d", &SIZE);
 printf("ENTER THE NO OF REQUEST SEQUENCE :\n");
 scanf("%d", &n);
 printf("ENTER THE REQUEST SEQUENCE :\n");
 for (i = 0; i < n; i++)
 scanf("%d", &request[i]);
 printf("ENTER THE CURRENT HEAD :\n");
 scanf("%d", &head);
 request[n] = head;
 request[n + 1] = SIZE - 1;
 request[n + 2] = 0;
 printf("ENTER THE PRE REQUEST :\n");
 scanf("%d", &pre);
 scan(n + 3);
}

```

## Experiment 4

```C

#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

void recursivePart(int pages[]){
    int st, len, k, c, j;
    printf("Enter the index of the starting block and its length: ");
    scanf("%d%d", &st, &len);
    k = len;
    if (pages[st] == 0){
        for (j = st; j < (st + k); j++){
            if (pages[j] == 0){
                pages[j] = 1;
                printf("%d------>%d\n", j, pages[j]);
            }
            else {
                printf("The block %d is already allocated \n", j);
                k++;
            }
        }
    }
    else
        printf("The block %d is already allocated \n", st);
    printf("Do you want to enter more files? \n");
    printf("Enter 1 for Yes, Enter 0 for No: ");
    scanf("%d", &c);
    if (c==1)
        recursivePart(pages);
    else
        exit(0);
    return;
}

int main(){
    int pages[50], p, a;

    for (int i = 0; i < 50; i++)
        pages[i] = 0;
    printf("Enter the number of blocks already allocated: ");
    scanf("%d", &p);
    printf("Enter the blocks already allocated: ");
    for (int i = 0; i < p; i++){
        scanf("%d", &a);
        pages[a] = 1;
    }

    recursivePart(pages);
    getch();
    return 0;
}

```

## Experiment 5 (FCFS)
```C

#include<stdio.h>
int main()
{
    //AT = 0 1 2 5
    //BT = 10 9 5 2
 int AT[10],BT[10],WT[10],TT[10],n;
 int burst=0,cmpl_T;
 float Avg_WT,Avg_TT,Total=0;
 printf("Enter number of the process\n");
 scanf("%d",&n);
 printf("Enter Arrival time and Burst time of the process\n");
 printf("AT\tBT\n");
 for(int i=0;i<n;i++)
 {
 scanf("%d%d",&AT[i],&BT[i]);
 }
 
 for(int i=0;i<n;i++)
 {
 if(i==0)
 WT[i]=AT[i];
 else
 WT[i]=burst-AT[i];
 burst+=BT[i];
 Total+=WT[i];
 }
 Avg_WT=Total/n;
 
 cmpl_T=0;
 Total=0;
 for(int i=0;i<n;i++)
 {
 cmpl_T+=BT[i];
 TT[i]=cmpl_T-AT[i];
 Total+=TT[i];
 }
 Avg_TT=Total/n;
 
 printf("Process ,Waiting_time ,TurnA_time\n");
 for(int i=0;i<n;i++)
 {
 printf("%d\t\t%d\t\t%d\n",i+1,WT[i],TT[i]);
 }
 printf("Average waiting time is : %f\n",Avg_WT);
 printf("Average turn around time is : %f\n",Avg_TT);
 return 0;
}

```

## Experiment 6 (FIFO)

```C

#include <stdio.h>
int main()
{
 int incomingStream[] = {7, 0, 1, 2 , 0, 3, 0, 4, 2 , 3, 0, 3, 1, 2, 0};
 int pageFaults = 0;
 int frames = 3;
 int m, n, s, pages;
 pages = sizeof(incomingStream)/sizeof(incomingStream[0]);
 printf("Incoming \t Frame 1 \t Frame 2 \t Frame 3");
 int temp[frames];
 for(m = 0; m < frames; m++)
 {
 temp[m] = -1;
 }
 for(m = 0; m < pages; m++)
 {
 s = 0;
 for(n = 0; n < frames; n++)
 {
 if(incomingStream[m] == temp[n])
 {
 s++;
 pageFaults--;
 }
 }
 pageFaults++;
 
 if((pageFaults <= frames) && (s == 0))
 {
 temp[m] = incomingStream[m];
 }
 else if(s == 0)
 {
 temp[(pageFaults - 1) % frames] = incomingStream[m];
 }
 
 printf("\n");
 printf("%d\t\t\t",incomingStream[m]);
 for(n = 0; n < frames; n++)
 {
 if(temp[n] != -1)
 printf(" %d\t\t\t", temp[n]);
 else
 printf(" - \t\t\t");
 }
 }
 printf("\nTotal Page Faults:\t%d\n", pageFaults);
 return 0;
}

```

## Experiment 7 (FIRST FIT)
```C

#include<stdio.h>
#define max 25
void main()
{
int frag[max],b[max],f[max],i,j,nb,nf,temp;
static int bf[max],ff[max];
//BLOCKS 4 = 1 4 8 9 
//Files  5 = 1 3 4 9 10
printf("\n\tMemory Management Scheme - First Fit");
printf("\nEnter the number of blocks:");
scanf("%d",&nb);
printf("Enter the number of files:");
scanf("%d",&nf);
printf("\nEnter the size of the blocks:-\n");
for(i=1;i<=nb;i++)
{
printf("Block %d = ",i);
scanf("%d",&b[i]);
}
printf("Enter the size of the files :-\n");
for(i=1;i<=nf;i++)
{
printf("File %d:",i);
scanf("%d",&f[i]);
}
for(i=1;i<=nf;i++)
{
for(j=1;j<=nb;j++)
{
if(bf[j]!=1)
{
temp=b[j]-f[i];
if(temp>=0)
{
ff[i]=j;
break;
}
}
}
frag[i]=temp;
bf[ff[i]]=1;
}
printf("\nFileno:\tFilesize:\tBlockno:\tBlocksize:\tFragement");
for(i=1;i<=nf;i++)
printf("\n\t%d\t\t%d\t\t%d\t\t\t%d\t\t%d",i,f[i],ff[i],b[ff[i]],frag[i]);
}

```

## Experiment 8
```C

#include<stdio.h>
void main()
{
int buffer[10], bufsize, in, out, produce, consume, choice=0;
in = 0;
out = 0;
bufsize = 10;
while(choice !=3)
{
printf("\n 1. Produce \t 2. Consume \t3. Exit");
printf("\n Enter your choice: ");
scanf("%d", &choice);
switch(choice) {
case 1: if((in+1)%bufsize==out)
printf("\n Buffer is Full");
else
{
printf("\nEnter the value: ");
scanf("%d", &produce);
buffer[in] = produce;
in = (in+1)%bufsize;
}
break;
case 2: if(in == out)
printf("\nBuffer is Empty");
else
{
consume = buffer[out];
printf("\nThe consumed value is %d", consume);
out = (out+1)%bufsize;
}
break;
}
}
}

```

## Experiment 9
```C

#include<stdio.h>
int main()
{
 int n,r,i,j,k,p,u=0,s=0,m;
 int block[10],run[10],active[10],newreq[10];
 int max[10][10],resalloc[10][10],resreq[10][10];
 int totalloc[10],totext[10],simalloc[10];
 printf("Enter the no of processes:");
 scanf("%d",&n);
 printf("Enter the no ofresource classes:");
 scanf("%d",&r);
 printf("Enter the total existed resource in each class:");
 for(k=1; k<=r; k++)
 scanf("%d",&totext[k]);
 printf("Enter the allocated resources:");
 for(i=1; i<=n; i++)
 for(k=1; k<=r; k++)
 scanf("%d",&resalloc[i][k]);
 printf("Enter the process making the new request:");
 scanf("%d",&p);
 printf("Enter the requested resource:");
 for(k=1; k<=r; k++)
 scanf("%d",&newreq[k]);
 printf("Enter the process which are n blocked or running:");
 for(i=1; i<=n; i++)
 {
 if(i!=p)
 {
 printf("process %d:\n",i+1);
 scanf("%d%d",&block[i],&run[i]);
 }
 }
 block[p]=0;
 run[p]=0;
 for(k=1; k<=r; k++)
 {
 j=0;
 for(i=1; i<=n; i++)
 {
 totalloc[k]=j+resalloc[i][k];
 j=totalloc[k];
 }
 }
 for(i=1; i<=n; i++)
 {
 if(block[i]==1||run[i]==1)
 active[i]=1;
 else
 active[i]=0;
 }
 for(k=1; k<=r; k++)
 {
 resalloc[p][k]+=newreq[k];
 totalloc[k]+=newreq[k];
 }
 for(k=1; k<=r; k++)
 {
 if(totext[k]-totalloc[k]<0)
 {
 u=1;
 break;
 }
 }
 if(u==0)
 {
 for(k=1; k<=r; k++)
 simalloc[k]=totalloc[k];
 for(s=1; s<=n; s++)
 for(i=1; i<=n; i++)
 {
 if(active[i]==1)
 {
 j=0;
 for(k=1; k<=r; k++)
 {
 if((totext[k]-simalloc[k])<(max[i][k]-resalloc[i][k]))
 {
 j=1;
 break;
 }
 }
 }
 if(j==0)
 {
 active[i]=0;
 for(k=1; k<=r; k++)
 simalloc[k]=resalloc[i][k];
 }
 }
 m=0;
 for(k=1; k<=r; k++)
 resreq[p][k]=newreq[k];
 printf("Deadlock willn't occur");
 }
 else
 {
 for(k=1; k<=r; k++)
 {
 resalloc[p][k]=newreq[k];
 totalloc[k]=newreq[k];
 }
 printf("Deadlock will occur");
 }
 return 0;
}

```

## Experiment 10
```C
#include <stdio.h>
int main() {
FILE *fp;
fp = fopen ("data.txt", "w");
}

```

